import Category from "./components/category"
import './globals.css'



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

	const { categories } = await import('../data/categories.json')

  return (
    <html lang="en">
      <head />
      <body>
				<header className="bg-purple-400 p-4">HEADER</header>
				<article className="flex gap-4">
					<aside className="min-w-[100px] bg-purple-700 p-4">
						<nav>{categories.map(category => <Category key={category.id} category={category} />)}</nav></aside>
					<main className="p-4">
						{children}
					</main>
				</article>
			</body>
    </html>
  )
}
