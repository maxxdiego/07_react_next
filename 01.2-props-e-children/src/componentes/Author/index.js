function Author({children, name, courses}) {
    return (
        <>
            <p>Nome do autor: {name}</p>
            <p>Curso: {children} </p>
            <p>Preço: {courses.price} </p>
            <p>Carga horária: {courses.workload}</p>
        </>
    );
}

export default Author;