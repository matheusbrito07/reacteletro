    export default async function getapi() {
    const url="http://localhost:8080/"
    const response=await fetch(url)
    const dados=await response.json()
    return dados
}