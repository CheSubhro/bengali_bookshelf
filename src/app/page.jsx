import FeaturedAuthors from "@/components/FeaturedAuthors ";
import FeaturedBooks from "@/components/FeaturedBooks ";
import Hero from "@/components/Hero";
import TopSellingBooks from "@/components/TopSellingBooks ";
import WeekBook from "@/components/WeekBook ";
// import { register } from 'swiper/element/bundle';

// register();

export default function Home() {
	return (
		<>
			<Hero/>
			<FeaturedAuthors/>
			<TopSellingBooks/>
			<FeaturedBooks/>
			<WeekBook/>
		</>
	);
}
