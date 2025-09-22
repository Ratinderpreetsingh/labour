import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-16">
      <Container>
        <div>

        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Labour Finder</h2>
          <p className="text-sm">
            Helping you connect with skilled and trusted workers <br></br>in your city.
            Find electricians, plumbers, carpenters, painters, and more with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">📍 New Delhi, India</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ support@labourfinder.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📘</a>
          </div>
        </div>
        </div>

      </Container>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Labour Finder. All rights reserved.
      </div>
    </footer>
  );
}
