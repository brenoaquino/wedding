const SHEET_NAME = "Respostas";

const HEADERS = [
  "Data e hora",
  "Identificador",
  "Nome",
  "Presença",
  "Acompanhantes",
  "Mensagem",
];

function setup() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error("Não foi possível encontrar a planilha vinculada.");
  }

  PropertiesService.getScriptProperties().setProperty(
    "SPREADSHEET_ID",
    spreadsheet.getId()
  );

  const sheet =
    spreadsheet.getSheetByName(SHEET_NAME) ||
    spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index")
    .setTitle("Confirmar presença — Paula e Breno")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitRsvp(payload) {
  const data = validatePayload(payload);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const spreadsheetId =
      PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");

    if (!spreadsheetId) {
      throw new Error("Execute a função setup antes de publicar.");
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`A aba "${SHEET_NAME}" não foi encontrada.`);
    }

    const existingIds =
      sheet.getLastRow() > 1
        ? sheet
            .getRange(2, 2, sheet.getLastRow() - 1, 1)
            .getDisplayValues()
            .flat()
        : [];

    if (existingIds.includes(data.submissionId)) {
      return {
        ok: true,
        duplicate: true,
        submissionId: data.submissionId,
      };
    }

    sheet.appendRow([
      new Date(),
      data.submissionId,
      data.name,
      data.attendance === "sim" ? "Sim" : "Não",
      data.companions,
      data.message,
    ]);

    SpreadsheetApp.flush();

    return {
      ok: true,
      duplicate: false,
      submissionId: data.submissionId,
    };
  } finally {
    lock.releaseLock();
  }
}

function validatePayload(payload) {
  if (
    !payload ||
    Object.prototype.toString.call(payload) !== "[object Object]"
  ) {
    throw new Error("Dados inválidos.");
  }

  if (String(payload.website || "").trim()) {
    throw new Error("Envio recusado.");
  }

  const submissionId = String(payload.submissionId || "").trim();

  if (!/^[a-zA-Z0-9-]{20,100}$/.test(submissionId)) {
    throw new Error("Identificador inválido.");
  }

  const name = safeText(payload.name, 150);

  if (!name) {
    throw new Error("Informe o nome.");
  }

  if (!["sim", "nao"].includes(payload.attendance)) {
    throw new Error("Informe se poderá comparecer.");
  }

  return {
    submissionId,
    name,
    attendance: payload.attendance,
    companions: safeText(payload.companions, 500),
    message: safeText(payload.message, 1000),
  };
}

function safeText(value, maximumLength) {
  let text = String(value || "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maximumLength);

  if (/^[=+\-@]/.test(text)) {
    text = `'${text}`;
  }

  return text;
}
