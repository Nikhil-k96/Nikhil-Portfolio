import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Nikhil Pasupuleti</h1>
        <p className="text-lg text-gray-600 mt-2">SQL & AWS Data Engineer | Specializing in Data Migrations, Integrations, and Analytics</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/Nikhil-k96" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/nikhilpasupuleti/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        </div>
      </section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card><CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I’m a data engineer with 5+ years experience in migrations, analytics, integrations with Salesforce, NetSuite, and AWS. Skilled in SQL, Python, Snowflake, Glue, PySpark.
          </p>
        </CardContent></Card>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card><CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Skills & Tools</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>SQL, T-SQL, PL/SQL</li><li>AWS (Glue, S3, Lambda, EMR)</li><li>Snowflake, DBT, Airflow</li>
            <li>Python, PySpark</li><li>Salesforce, NetSuite, Celigo</li><li>Power BI, Tableau, Informatica</li>
          </ul>
        </CardContent></Card>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card><CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Highlighted Projects</h2>
          <ul className="space-y-4">
            <li><strong>NetSuite Data Migration:</strong> Migrated billing data for 5000+ practices from SQL Server to NetSuite.</li>
            <li><strong>Glue & Snowflake Pipeline:</strong> Teradata to Snowflake using AWS Glue, Lambda, PySpark.</li>
            <li><strong>Redshift to S3:</strong> Real-time migration and reporting with Athena.</li>
            <li><strong>PeopleSoft Integration:</strong> Ingested student records via SQL and Excel workflows.</li>
          </ul>
        </CardContent></Card>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card><CardContent className="p-4">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p>Email: nikhilpasupuleti9@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/nikhilpasupuleti</p>
          <p>GitHub: github.com/Nikhil-k96</p>
          <Button className="mt-4" asChild>
            <a href="/NikhilPasupuleti_Resume.pdf" download>Download Resume</a>
          </Button>
        </CardContent></Card>
      </motion.section>
    </main>
  );
}
