import React, { Component } from 'react';
import BookRow from "./BookRow";
import Button from "components/_ui/Button/Button";
import Card from "components/_ui/Card/Card";
import Label from "../_ui/Label/Label";
import './Bookshelf.scss';

class Bookshelf extends Component {

    render() {
        const { books, booksToShow, categories, expanded, genreColors, genresList, showMoreBooks } = this.props;

        return (
            <Card className="Bookshelf" padding>
                <div className="Bookshelf__books__container">
                    <div className="BookRowLabels">
                        <Label category="table" className="BookRowLabel">
                            Título
                        </Label>
                        {/* <Label category="table" className="BookRowLabel BookRowLabel--author">
                            Author
                        </Label> */}
                        <Label category="table" className="BookRowLabel BookRowLabel--genre">
                            Tipo
                        </Label>
                        <Label category="table" className="BookRowLabel BookRowLabel--status">
                            Estado
                        </Label>
                    </div>
                    {books.slice(0, booksToShow).map((i, key) =>
                        <BookRow
                            audiobook={books[key].audiobook}
                            author={books[key].author}
                            categories={categories}
                            color={this.findColor}
                            coverImg={books[key].coverImg}

                            genre={books[key].genre}
                            genresList={genresList}
                            genreColors={genreColors}
                            goodreadsUrl={books[key].goodreadsUrl}
                            finished={books[key].finished}
                            inProgress={books[key].inProgress}
                            isFiction={books[key].isFiction}
                            title={books[key].title}
                            tags={books[key].tags}
                            key={key}
                            summary={books[key].summary}
                        />
                    )}
                    <div className="Bookshelf__action__container">
                        {expanded && (
                            <p className="Bookshelf__action__message">
                                Esta lista crece cada poco. ¡Permanece atento! <br />Además, seguro que <strong>coincidimos</strong> en alguno. <br />Cuéntame en cuáles. <span className="emoji--small" role="img" aria-label="emoji">😊</span>
                            </p>
                        )}
                        <Button className="Bookshelf__action__button" category="secondary" onClick={showMoreBooks}>
                            Ver {expanded ? "menos" : "más"}
                        </Button>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Bookshelf;