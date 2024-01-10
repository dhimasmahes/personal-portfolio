export default async function useWpApi({query, variables = {}}) {
    const key = JSON.stringify({
        query,
        variables
    })
}