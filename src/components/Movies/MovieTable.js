import { Table } from "antd";
import { useNavigate } from "react-router";

function MovieTable({movies}){
    let navigate = useNavigate();
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key:'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Director',
            dataIndex: 'director',
            key:'director',
            sorter: (a,b) => a.director.localeCompare(b.director)
        },
        {
            title: 'Release Date',
            dataIndex: 'release_date',
            key:'release_date',
            sorter: (a, b) => new Date(a.release_date) - new Date(b.release_date)
        }
    ];
    const data = movies.map((movie)=>{
        return {
            key: movie.episode_id,
            name: movie.title,
            director: movie.director,
            release_date: movie.release_date
        }
    });
    return (
        <>
        <Table columns={columns} dataSource={data} 
        className="movie-table"
        onRow={(record) => ({
            onClick: () => {
              let url = movies.filter((movie) => movie.episode_id === record.key)[0].url;
              navigate(`/${record.name}?url=${encodeURIComponent(url)}`);
              // Or do something else like navigate or open a modal
            },
            style: { cursor: 'pointer' }, // Indicate clickable row with pointer cursor
          })}
        />
        </>
    )
}
export default MovieTable;