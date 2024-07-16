'use client';

/**
 * Opens a chat using the given phone number on WhatsApp.
 */
const openChat = async (wppNumber:string='por numero aqui') => {
    const url = `https://api.whatsapp.com/send?phone=${wppNumber? wppNumber:'por numero aqui'}`;
    try { window.location.href = url; } catch (error) { console.error('Error: ', error); }
}

export { openChat };