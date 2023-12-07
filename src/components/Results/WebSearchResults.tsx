import Link from 'next/link'
import Parser from 'html-react-parser';
import { ResultData, SearchDataResponse } from '@/interfaces/SearchResultData';

export default function WebSearchResults({ results }: { results: SearchDataResponse }) {
    return (
        <section 
        className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p
             className="text-gray-600 text-sm mb-5 mt-3">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime})</p>
            {results.items?.map((result: ResultData) => (
                <div 
                className="mb-8 max-w-xl" 
                key={result.link}>
                    <div 
                    className="group flex flex-col"
                    >
                        <Link
                        className="text-sm truncate" 
                        href={result.link}
                        >
                            {result.formattedUrl}
                        </Link>
                        <Link 
                        className="group-hover:underline decoration-blue-800
                        text-xl truncate font-medium text-blue-800"
                        href={result.link}
                        >
                            {result.title}
                        </Link>
                    </div>
                    <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
                </div>
            ))}
        </section>
    )
}