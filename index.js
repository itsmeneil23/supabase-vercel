// Import the Supabase client
const { createClient } = require('@supabase/supabase-js');

// Initialize the Supabase client
const supabaseUrl = 'https://dcavswmggbyoenqemsco.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjYXZzd21nZ2J5b2VucWVtc2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NzM0ODYsImV4cCI6MjA2MDA0OTQ4Nn0.D_gwAeOaSXOsIXnlaPYm6YhpLm38bliQ_THJky8O2E0';
const supabase = createClient(supabaseUrl, supabaseKey);

// Example function to fetch data from a table
async function fetchData() {
  const { data, error } = await supabase
    .from('Neil Joe Augustine') // Replace with your table name
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data:', data);
  }
}

// Example function to insert data into the table with debugging information
async function insertData() {
  const { data, error } = await supabase
    .from('Neil Joe Augustine')
    .insert([{}]); // Insert an empty object since the table auto-generates all columns

  if (error) {
    console.error('Error inserting data:', error);
  } else {
    console.log('Inserted data:', data);
  }

  // Fetch data after insertion to verify
  const { data: fetchData, error: fetchError } = await supabase
    .from('Neil Joe Augustine')
    .select('*');

  if (fetchError) {
    console.error('Error fetching data after insertion:', fetchError);
  } else {
    console.log('Data after insertion:', fetchData);
  }
}

// Call the example function
fetchData();

// Call the insertData function
insertData();