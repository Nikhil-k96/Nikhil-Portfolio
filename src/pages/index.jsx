import React from "react";
import { Card, CardContent } from "../components/ui/card";

export default function Portfolio() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Nikhil Pasupuleti</h1>
        <p className="text-lg text-gray-600 mt-2">SQL & AWS Data Engineer | Specializing in Data Migrations, Integrations, and Analytics</p>
        <div className="mt-4">
          <a href="/Nikhil_Pasupuleti_Resume.docx" download className="px-4 py-2 bg-black text-white rounded-lg">Download Resume</a>
        </div>
      </section>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I’m a data engineer with over 5 years of experience designing and automating data migration pipelines, building analytics solutions, and integrating data from platforms like Salesforce, NetSuite, and AWS. I bring hands-on expertise in SQL, Python, Snowflake, Glue, and PySpark.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Skills & Tools</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>SQL, T-SQL, PL/SQL</li>
            <li>AWS (Glue, S3, Lambda, EMR)</li>
            <li>Snowflake, DBT, Airflow</li>
            <li>Python, PySpark</li>
            <li>Salesforce, NetSuite, Celigo</li>
            <li>Power BI, Tableau, Informatica</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <ul className="space-y-4">
            <li><strong>NetSuite Data Migration:</strong> Migrated billing data for 5000+ practices and 56K providers from SQL Server to NetSuite using dynamic stored procedures and Python automation.</li>
            <li><strong>AWS Glue & Snowflake Data Lake:</strong> Built pipelines to move healthcare claims data from Teradata to Snowflake using AWS services.</li>
            <li><strong>PeopleSoft Student Integration:</strong> Ingested student records into Oracle PeopleSoft with SQL and Excel validations.</li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
