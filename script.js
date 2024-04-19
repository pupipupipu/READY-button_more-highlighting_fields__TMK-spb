define(["jquery"], function ($) {
  var CustomWidget = function () {
    var self = this,
      system = self.system;
    this.callbacks = {
      settings: function () {},
      init: function () {
        const userData = {
          users: {
            8459971: {
              staff: "oksanaom",
            },
            10239285: {
              staff: "gaepkulova-a",
            },
            10369845: {
              staff: "ben4rn",
            },
            10359733: {
              staff: "pnmaslova"
            },
            9594090: {
              staff: "bakhodurov"
            },
            10114305: {
              staff: "ekaterina4412"
            },
            10180277: {
              staff: "piliptsovge"
            },
            10287025: {
              staff: "olgasuhomlina"
            },
            10637977: {
              staff: "razvivatel"
            },
						//ТЕСТ НА СЕБЕ
            9999129: {
              staff: "ab102030"
            },
          },
        };

        //Сам элемент лида, в который юзер заходит
        let cardHolderElement = document.getElementById("card_holder");

        //ID юзера
        let idUser = document.querySelector(".n-avatar.js-left-avatar").id;

        //Имя пользователя
        let nameUser = document
          .querySelector(".nav__top__userbar__userinfo__username")
          .textContent.trim();

        // Выводим ошибку, если элемент не найден
        if (!cardHolderElement) {
          // Элемент не найден, выводим сообщение об ошибке
          console.error('Элемент с ID "card_holder" не найден.');
        } else {
          clickToMore();
        }

        //// Отслеживание изменения стилей card_holder
        // Создаем экземпляр MutationObserver с функцией обратного вызова
        let observer = new MutationObserver(function (mutationsList) {
          for (let mutation of mutationsList) {
            if (
              mutation.type === "attributes" &&
              mutation.attributeName === "style"
            ) {
              // Свойство style элемента было изменено
              let styleCardHolder = window.getComputedStyle(cardHolderElement);
              let displayValueCardHolder =
                styleCardHolder.getPropertyValue("display");

              // Проверяем, если display не равен 'none', то выполняем действия
              if (displayValueCardHolder !== "none") {
                // Ваш код для случая, когда display отличен от 'none'
                clickToMore();
              }
            }
          }
        });

        // Настраиваем наблюдение для изменений атрибута style
        observer.observe(cardHolderElement, { attributes: true });
        //// Отслеживание изменения стилей card_holder

        function clickToMore() {
          // Проверяем, есть ли пользователь с указанным ID и его роль подходит
          if (
            userData.users[idUser] &&
            (userData.users[idUser].role === "Менеджер по продажам" ||
              userData.users[idUser].role === "Руководитель группы продаж")
          ) {
            //exp
            waitForSelector(() => {
							let potentialExpGeneral = document.querySelector('[data-id="656673"]');
							potentialExpGeneral.style.borderBottom = "3px solid rgb(235 235 248)";

							let potentialExpFact = document.querySelector('[data-id="701657"]');
							potentialExpFact.style.borderBottom = "3px solid rgb(235 235 248)";
						}, '[data-id="656673"]');
            //ndd
            waitForSelector(() => {
							let potentialNddGeneral = document.querySelector('[data-id="130985"]');
							potentialNddGeneral.style.borderBottom = "3px solid rgb(235 235 248)";

							let potentialNddFact = document.querySelector('[data-id="701659"]');
							potentialNddFact.style.borderBottom = "3px solid rgb(235 235 248)";
						}, '[data-id="130985"]');
            //carg
            waitForSelector(() => {
							let potentialCargoGeneral = document.querySelector('[data-id="656709"]');
							potentialCargoGeneral.style.borderBottom = "3px solid rgb(235 235 248)";

							let potentialCargoFact = document.querySelector('[data-id="701663"]');
							potentialCargoFact.style.borderBottom = "3px solid rgb(235 235 248)";
						}, '[data-id="656709"]');

            waitForSelector(() => {
              const allPhones = document.querySelectorAll(
                '[data-pei-code="phone"]'
              );

              allPhones.forEach((phone) => {
                phone.style.borderBottom = "3px solid rgb(235 235 248)";
              });

              const allEmails = document.querySelectorAll(
                '[data-type="email"]'
              );

              allEmails.forEach((email) => {
                email.style.borderBottom = "3px solid #d5d5f8";
              });

              for (let i = 0; i < 3; i++) {
                buttonSecondMore = document.querySelectorAll(
                  ".linked-form__field-shower-text.js-linked-show-all-fields"
                )[1];
                buttonSecondMore.click();
              }
            }, ".linked-form__field-shower-text.js-linked-show-all-fields");
          }
        }

        /////// Ожидание появления селектора
        function waitForSelector(workFunction, selector) {
          // Передаваемый элемент
          const targetElement = document.querySelector(selector);

          if (targetElement) {
            workFunction();
          } else {
            // Создаем экземпляр MutationObserver с колбэком, который будет вызываться при изменениях
            const observer = new MutationObserver((mutationsList, observer) => {
              // Проверяем, есть ли сейчас элементы, соответствующие вашему селектору
              const targetElementNow = document.querySelector(selector);

              if (targetElementNow) {
                // Если элемент найден, останавливаем отслеживание и запускаем скрипт
                observer.disconnect();
                workFunction();
              }
            });

            // Начинаем отслеживание изменений в корне документа и его потомках
            observer.observe(document.documentElement, {
              childList: true,
              subtree: true,
            });
          }
        }
        /////// Ожидание появления селектора
        return true;
      },
      bind_actions: function () {
        return true;
      },
      render: function () {
        return true;
      },
      contacts: {
        selected: function () {},
      },
      leads: {
        selected: function () {},
      },
      onSave: function () {
        return true;
      },
    };
    return this;
  };
  return CustomWidget;
});
