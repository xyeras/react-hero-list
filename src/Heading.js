const Heading = ({title, subTitle}) => {

    let obj = { a: 1, b: 2, c: 3};
    // let a = obj.a;
    let { a } = obj;
    console.log('What is up a?', a);

    console.log(title);
    return (
        <div className="row text-center">
            <div className="col">
                <h1 className="my-5">
                    {title}
                </h1>
                <h3>
                    {subTitle}
                </h3>
            </div>
        </div>
    );
};

export default Heading