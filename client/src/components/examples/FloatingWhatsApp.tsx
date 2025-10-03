import FloatingWhatsApp from '../FloatingWhatsApp';

export default function FloatingWhatsAppExample() {
  return (
    <div className="h-96 relative bg-muted/30">
      <div className="p-8">
        <p className="text-muted-foreground">
          The floating WhatsApp button appears in the bottom-right corner of the page.
        </p>
      </div>
      <FloatingWhatsApp />
    </div>
  );
}