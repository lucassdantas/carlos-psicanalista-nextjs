'use client';

/**
 * Opens a chat using the given phone number on WhatsApp.
 */
const openChat = async (wppNumber:string='5511976318865') => {
    const url = `https://api.whatsapp.com/send?phone=${wppNumber? wppNumber:'5511976318865'}`;
    try { window.location.href = url; } catch (error) { console.error('Error: ', error); }
}

export { openChat };