export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ochilov Jaxongirmirzo. All rights
              reserved.
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              Designed and built with ❤️ using Next.js, Three.js, and Tailwind
              CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
