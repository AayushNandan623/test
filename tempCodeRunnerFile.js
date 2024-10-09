const title =
        event.querySelector(".double-wrap")?.innerText.trim() || "N/A";
      const institution = event.querySelector("p")?.innerText.trim() || "N/A";
      const prize =
        event
          .querySelector(".prize")
          ?.innerText.trim()
          .replace(/[^\d,]/g, "") || "N/A"; // Remove non-digit characters
      const registeredUsers =
        event
          .querySelector(".seperate_box.align-center:nth-of-type(2)")
          ?.childNodes[1]?.textContent.trim() || "N/A";
      const daysLeft =
        event
          .querySelector(".seperate_box.align-center:nth-of-type(3)")
          ?.childNodes[1]?.textContent.trim() || "N/A";
