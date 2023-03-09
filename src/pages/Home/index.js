import BookList from "../../components/BookList";
import image from "../../assets/books/manga_demo.jpg";

function Home() {
    const subjects = ["Truyện đề cử", "Truyện mới ra", "Truyện mới cập nhật"];

    const bookList = [
        {bookCover: {image}, bookTitle: "Truyện tranh 1", bookView: "350M", bookFollow: "297K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 2", bookView: "362M", bookFollow: "44K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 3", bookView: "248M", bookFollow: "257K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 4", bookView: "105M", bookFollow: "667K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 5", bookView: "978K", bookFollow: "57K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 6", bookView: "88K", bookFollow: "20K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 7", bookView: "109K", bookFollow: "40K"},
        {bookCover: {image}, bookTitle: "Truyện tranh 8", bookView: "256K", bookFollow: "105K"}
    ];

    return (
        <div>
            {subjects.map((subj, i) =>
                <BookList key={i} type={1} subject={subj} list={bookList} />
            )}
        </div>
    )
}

export default Home;