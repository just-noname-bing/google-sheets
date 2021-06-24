import "dotenv-safe/config";
import { google } from "googleapis";
import { SPREADSHEET_ID } from "./constants";

(async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "google-credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({
        version: "v4",
        auth: client,
    });

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: SPREADSHEET_ID,
        range: "testdbSH",
    });

    console.log(getRows.data.values);
})();
