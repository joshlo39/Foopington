import Link from 'next/link'
const links = [
  {href: '/', label: 'Home'},
  {href: '/journal', label: 'Journal' },
  {href: '/history', label: 'History'},
  {href: '/Recipes', label: 'Recipes'}
]
const journalLayout = ({ children }) => {

    return (
    <div className="min-h-screen w-screen relative bg-gradient-to-b from-blue-300 to-blue-500 text-gray-300">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/20 shadow hover:shadow-2xl">
        <ul>
          {links.map(link => (
            <li key={link.href} className="p-4 hover:bg-black/20 text-xl">
              <Link href = {link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            </div>
        </header>
        <main className="overflow-auto pb-4">
          {children}
        </main>
      </div>
    </div>
    )

}

export default journalLayout
