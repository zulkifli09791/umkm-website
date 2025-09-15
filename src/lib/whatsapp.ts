export const generateWhatsAppMessage = (
  productName: string,
  price: number,
  quantity: number = 1
): string => {
  const message = encodeURIComponent(
    `Halo, saya ingin memesan:\n\n` +
    `Produk: ${productName}\n` +
    `Harga: Rp${price.toLocaleString('id-ID')}\n` +
    `Jumlah: ${quantity}\n\n` +
    `Terima kasih!`
  );
  return `https://wa.me/6281234567890?text=${message}`; // Ganti dengan nomor WhatsApp UMKM
};