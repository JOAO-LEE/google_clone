export default async function Web({ searchParams }: { searchParams: any }) {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);
    const data = await response.json();
    const results = data.items;
    console.log(results)
    return (
        <>  
            {results && results.map((result: any) => (
                <h1>{result.title}</h1>
            ))}
       </>
    )
}