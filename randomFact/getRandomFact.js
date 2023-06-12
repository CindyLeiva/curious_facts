function deleteFact () {
    const actualFact = document.querySelector('h4.curious-fact')
    if ( actualFact ) {
        actualFact.remove()
    }
}

async function getRandomFact() {
    try {
        deleteFact()

        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        const data = await response.json()
        
        let fact = document.createElement('h4')
        fact.textContent = data.text
        fact.className = 'curious-fact'

        const containerFact = document.getElementById('curious-fact')
        containerFact.appendChild(fact)
        
    } catch (e) {
        
        return e
    }
}

document.getElementById('button-exploration').addEventListener('click', getRandomFact)
// module.exports = { getRandomFact ,deleteFact }