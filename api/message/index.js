module.exports = async function (context, req) {
    context.res.json({
        text: "Hello there from the API"
    });
};