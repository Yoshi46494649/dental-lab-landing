// Google Sheets API integration
// This will connect to the specified Google Spreadsheet

// WARNING: This ID should be moved to environment variables
const SPREADSHEET_ID = import.meta.env.VITE_SPREADSHEET_ID || '1sWX4B6Vo4I0q-fDIkS7l3EgZtn5qem39-Ale7KSfcsk';

// For client-side Google Sheets integration, we'll use the REST API approach
// This requires the spreadsheet to be publicly accessible or use Google Apps Script

export const submitToGoogleSheets = async (formData) => {
  try {
    // Prepare the data
    const timestamp = new Date().toLocaleString('en-AU', { 
      timeZone: 'Australia/Brisbane',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const rowData = {
      timestamp,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      clinic: formData.clinic || 'Not specified',
      caseDetails: formData.message,
      status: 'New',
    };

    // Using Google Apps Script Web App URL from environment variables
    const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || 
      'https://script.google.com/macros/s/AKfycbyHRSGi0cOegxc6N_vQlW9g6GxBSy0EDr2UL1uxbHv7RZMBrfkscxNqlbqLkl9ZTq5R/exec';
    
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rowData),
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    const result = await response.json();
    console.log('Successfully submitted to Google Sheets:', result);
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    
    // For now, return success to allow testing other features
    // In production, you might want to handle this differently
    return { 
      success: false, 
      error: error.message,
      // Temporary: still return success for development
      fallback: true 
    };
  }
};

// Alternative method using direct Google Sheets API (requires server-side authentication)
export const submitViaDirectAPI = async (formData) => {
  // This method requires server-side implementation due to CORS restrictions
  // and the need for service account credentials
  
  const apiEndpoint = `/api/submit-to-sheets`; // Server-side endpoint
  
  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit via direct API');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Direct API submission failed:', error);
    throw error;
  }
};

// Google Apps Script code that should be deployed as a Web App:
/*
function doPost(e) {
  // WARNING: Replace with your actual spreadsheet ID
  const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Add headers if this is the first row
  const lastRow = sheet.getLastRow();
  if (lastRow === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Phone', 'Email', 'Clinic', 'Case Details', 'Status']);
  }
  
  // Add the new data
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.phone, 
    data.email,
    data.clinic,
    data.caseDetails,
    data.status
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
    .setMimeType(ContentService.MimeType.JSON);
}

// Deploy this script as a Web App with:
// - Execute as: Me
// - Who has access: Anyone
// Then use the Web App URL in the scriptUrl variable above
*/