import { Table } from "antd";
import { useNavigate } from "react-router";
/**
 * MovieTable component renders a table of movies using Ant Design's Table component.
 * Each row in the table is clickable and navigates to a detailed view of the movie.
 *
 * @param {Object} props - The props object.
 * @param {Array} props.movies - An array of movie objects. Each movie object should have the following properties:
 *   @param {number} props.movies[].episode_id - The unique identifier for the movie.
 *   @param {string} props.movies[].title - The title of the movie.
 *   @param {string} props.movies[].director - The director of the movie.
 *   @param {string} props.movies[].release_date - The release date of the movie in ISO format.
 *   @param {string} props.movies[].url - The URL for more details about the movie.
 *
 * @returns {JSX.Element} A table displaying the movies with sortable columns and clickable rows.
 */
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