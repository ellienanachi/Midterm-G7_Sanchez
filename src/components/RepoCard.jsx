function RepoCard(props) {
    const { name, description, stars } = props;
    return (
        <div className="rounded-xl border-2 border-[#222222] p-8">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="mt-2 text-lg">{description}</p>
            <p className="mt-4 text-xl font-bold">Stars: {stars}</p>
        </div>
    );
}

export default RepoCard;