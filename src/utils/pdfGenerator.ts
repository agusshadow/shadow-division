import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Person, Result } from "../entities/entities";

export const generatePDF = (people: Person[], results: Result[]) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Resumen de gastos compartidos", 14, 20);

  autoTable(doc, {
    startY: 30,
    head: [["Nombre", "Monto aportado"]],
    body: people.map((p) => [p.name, `$${p.amount.toFixed(2)}`]),
  });

  if (results.length > 0) {
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [["Quién paga", "A quién", "Monto"]],
      body: results.map((r) => [r.from, r.to, `$${r.amount.toFixed(2)}`]),
    });
  }

  doc.save("resumen-gastos.pdf");
};
