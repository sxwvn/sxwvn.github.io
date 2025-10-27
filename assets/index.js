  async function fetchData() {
    try {
      const res = await fetch('https://sxwvn-website-be.onrender.com/api/Y2hpY2tlbi1sYWR5/dG9rZW56')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
    } catch (err) {
      console.error("Error!", errs)
    }
  }

  async function postData() {
    try {
      await fetch('https://sxwvn-website-be.onrender.com/api/Y2hpY2tlbi1sYWR5/dG9rZW56', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json()) 
      .then(data => console.log('Success:', data)) 
      .catch(error => console.error('Error:', error))
    } catch (err) {
      console.error("Error!", err)
    }
  }

  async function postWithData() {
    try {
      await fetch('https://sxwvn-website-be.onrender.com/api/Y2hpY2tlbi1sYWR5/dG9rZW56', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({
          Token: 'what do you mean use the ID? what? i want to talk.'
        })
      })
      .then(response => response.json()) 
      .then(data => console.log('Success:', data)) 
      .catch(error => console.error('Error:', error))
    } catch (err) {
      console.error("Error!", err)
    }
  }

  // Fetch immediately, then every 5 minutes
  fetchData()
  setInterval(fetchData, 5 * 60 * 1000)
  setInterval(postData, 60 * 1000)
  setInterval(postWithData, 2 * 60 * 1000)