import SectionHeadline from "@/app/ui/section-header";
import Bookshelf from '@/public/icons/bookshelf.png';
import Search from "@/app/ui/search";
import BookList from "@/app/ui/home/book-list";
import { fetchBooks } from "@/app/lib/data";

export default async function Home() {
  const data = await fetchBooks();

  return (
    <div className="bg-fixed bg-no-repeat bg-cover">
      <SectionHeadline icon={Bookshelf} headline='Shelf Pick' />
      <BookList data={data} />
    </div>
  );
}
