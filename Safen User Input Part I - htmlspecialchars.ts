export function htmlspecialchars(formData: string): string {
    // Insert your code here
    formData.replace(/</gi,"&lt;").replace(">", "&gt;").replace("\"","&quot;").replace("&","&amp;");
    
    return formData;
  }