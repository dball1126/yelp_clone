export const fetchReview = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/reviews/${id}`
    });
};

export const fetchReviews = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/reviews`
    });
};

export const createReview = (review) => {
    return $.ajax({
        method: 'POST',
        url: `/api/reviews`,
        data: {review}
    })
}

export const editReview = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/reviews/${id}/edit`
    })
}

export const updateReview = (review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: {review}
    })
}

export const destroyReview = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${id}`
    })
}