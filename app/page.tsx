import SectionHeadline from "@/app/ui/section-header";
import Bookshelf from '@/public/icons/bookshelf.png';
import Search from "@/app/ui/search";

export default function Home() {
  return (
    <div className="bg-fixed bg-no-repeat bg-cover">
      <SectionHeadline icon={Bookshelf} headline='Shelf Pick' />
      <Search />
    </div>
  );
}
