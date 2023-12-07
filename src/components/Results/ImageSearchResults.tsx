import { SearchDataResponse } from "@/interfaces/SearchResultData";
import Image from "next/image";
import Link from "next/link";

export default function ImageSearchResults({ results } : { results: SearchDataResponse }) {
    return (
        <section>
            {/* <div className="">
                {
                    results.items.map((result: any) => (
                      <div 
                      key={result.link}>
                          <div className="group">
                            <Link href={result.image.contextLink}>
                            <Image src={result.link} alt={result.title} />
                            </Link>
                        </div>
                      </div>
                    ))
                }
            </div> */}
        </section>
    )
}