import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "contact_data.xlsx");

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Received data:", data);

    let workbook = new ExcelJS.Workbook();
    let worksheet;

    // check if file exist 
    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet("Contacts");
    } else {
      worksheet = workbook.addWorksheet("Contacts");
      worksheet.addRow(["Name", "Student ID", "Message", "Timestamp"]); // Header
    }

    // add new data 
    worksheet.addRow([data.name, data.studentId, data.message, new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" })]);

    // write file
    await workbook.xlsx.writeFile(filePath);

    console.log("Data written successfully!");
    return NextResponse.json({ message: "Data saved" });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}