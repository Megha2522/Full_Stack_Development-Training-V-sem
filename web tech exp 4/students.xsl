<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <title>Student Details</title>
        <style>
          table {
            width: 50%;
            border-collapse: collapse;
            margin: 20px 0;
            font-family: Arial, sans-serif;
          }
          table, th, td {
            border: 1px solid black;
          }
          th, td {
            padding: 10px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h2>Student Details</h2>
        <table>
          <tr>
            <th>Roll No</th>
            <th>Marks</th>
            <th>Total Marks</th>
            <th>Percentage</th>
          </tr>
          <xsl:for-each select="Students/Student">
            <tr>
              <td><xsl:value-of select="RollNo"/></td>
              <td><xsl:value-of select="Marks"/></td>
              <td><xsl:value-of select="TotalMarks"/></td>
              <td><xsl:value-of select="Percentage"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>