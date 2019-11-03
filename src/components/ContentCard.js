import React from "react";
import "./ContentCards.scss";
import { Link } from "./../util/router.js";

function ContentCard({ classDetail }) {
  return (
    <div className="column">
      <div class="card">
        <div class="card-image">
          <Link
            to={`/classes/${classDetail.id}`}
            key={`class-image-${classDetail.id}`}
          >
            <img src={classDetail.images[0]} alt={classDetail.images[0]} />
          </Link>
        </div>
        <div className="card-content">
          <span class="tag is-primary">{classDetail.owner.skillset[0]}</span>
          <span class="tag is-secondary is-pulled-right">8 Credits</span>
          <h4>{classDetail.title}</h4>
          <p
            style={{
              display: "-webkit-box",
              webkitLineClamp: "3",
              webkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {classDetail.description}
          </p>
          <span
            className="has-text-weight-heavy"
            style={{ marginRight: "10px" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
