export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm tracking-wider">
          © {new Date().getFullYear()} Furkan Kaplancan. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2 tracking-widest">
          IFBB PRO BODYBUILDER
        </p>
      </div>
    </footer>
  );
}
