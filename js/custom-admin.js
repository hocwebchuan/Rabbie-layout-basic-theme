$(function () {
  // Menu for small screen.
  var menu = $(".menu");
  clickFnc(menu);

  $("textarea#type-textarea1").tinymce({
    height: 500,
    menubar: false,
    plugins: [
      // Core editing features
      "advlist",
      "anchor",
      "autolink",
      "charmap",
      "code",
      "codesample",
      "emoticons",
      "image",
      "link",
      "lists",
      "media",
      "searchreplace",
      "table",
      "visualblocks",
      "wordcount",
      "fullscreen",
      "insertdatetime",
      // Your account includes a free trial of TinyMCE premium features
      // Try the most popular premium features until Oct 3, 2024:
      //   "checklist",
      //   "mediaembed",
      //   "casechange",
      //   "export",
      //   "formatpainter",
      //   "pageembed",
      //   "a11ychecker",
      //   "tinymcespellchecker",
      //   "permanentpen",
      //   "powerpaste",
      //   "advtable",
      //   "advcode",
      //   "editimage",
      //   "advtemplate",
      //   "ai",
      //   "mentions",
      //   "tinycomments",
      //   "tableofcontents",
      //   "footnotes",
      //   "mergetags",
      //   "autocorrect",
      //   "typography",
      //   "inlinecss",
      //   "markdown",
    ],
    toolbar:
      "undo redo | styleselect | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
    tinycomments_mode: "embedded",
    tinycomments_author: "Duonghc",
    mergetags_list: [
      { value: "First.Name", title: "First Name" },
      { value: "Email", title: "Email" },
    ],
    ai_request: (request, respondWith) =>
      respondWith.string(() =>
        Promise.reject("See docs to implement AI Assistant")
      ),
  });
});
