import NoResult from "@/components/NoResult/NoResult";
import ImageSearchResults from "@/components/Results/ImageSearchResults";
import { ResultImageData, SearchImageDataResponse } from "@/interfaces/SearchResultData";


export default async function ImageSearch({ searchParams }: { searchParams: any }) {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`);
    if (!response.ok) {
        throw new Error("Something went wrong.");
    }

    const data: SearchImageDataResponse = await response.json();
    const results: Array<ResultImageData> = data.items;

    if (!results) {
        return (
            <NoResult/>
        )
    }

    return (
        <>
        {
            results 
            && 
            (
                <ImageSearchResults results={data}/>  
            )
        }
        </>
    )
}