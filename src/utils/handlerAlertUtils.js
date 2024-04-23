export async function handleAlert(page){
   await page.on('dialog', dialog => dialog.accept());
}