document.body.innerHTML = `
<section>
    <header>
        <h1>The React Blog</h1>
    </header>
    <article>
        <h2>${article.title}</h2>
        ${article.body}
    </article>
    <footer>
        <p>copyright ${new Date().getFullYear()} | The React Blog</p>
    </footer>
</section>
`;