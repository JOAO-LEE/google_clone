interface SearchInfoData {
    searchTime: number,
    formattedSearchTime: string,
    totalResults: string,
    formattedTotalResults: string
}

interface ResultData {
    title: string
    htmlTitle: string
    link: string
    displayLink: string
    snippet: string
    htmlSnippet: string
    cacheId: string
    htmlFormattedUrl: string
    formattedUrl: string
}

interface SearchDataResponse {
    kind: string,
    url: {
    type: string,
    template: string
  },
    queries: { request: [ [Object] ], nextPage: [ [Object] ] },
    context: { title: 'goo-nextjs14' },
    searchInformation?: SearchInfoData,
    items: ResultData[]
}

export type { SearchInfoData, ResultData, SearchDataResponse }