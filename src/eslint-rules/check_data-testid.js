module.exports = {
    meta: {
      messages: {
        missingDataTestId: "The <{{ tagName }}> tag is missing a data-testid attribute.",
      },
    },
    create(context) {
      return {
        JSXOpeningElement(node) {
          const { name: { name: tagName }, attributes } = node;
  
          if (attributes.some((attr) => attr.name?.name === "data-testid")) return;
  
          context.report({
            node,
            messageId: "missingDataTestId",
            data: { tagName },
          });
        },
      };
    },
  };
  