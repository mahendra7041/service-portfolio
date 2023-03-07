
const MODEL_ATTR = "lounchModelId";
const MODEL_BACKDROP = "model-backdrop";
const MODEL_CARD = "model-card";
const MODEL_CLOSE = "model-close";
const MODELS = document.querySelectorAll(`[data-${MODEL_ATTR}]`);

var Backdrop;
var ModelCard;
var ModelCardParen;
var ModelClose;
var isModelOpen = false;

MODELS.forEach(model => {
    model.addEventListener('click', m => {

        const lounchId = model.dataset.lounchmodelid;
        const CurrentModel = document.querySelector(`#${lounchId}`);

        if (CurrentModel !== undefined) {
            if (CurrentModel.dataset.model === 'true') {
                Backdrop = CurrentModel.querySelector(`.${MODEL_BACKDROP}`);
                ModelCard = CurrentModel.querySelector(`.${MODEL_CARD}`);
                ModelCardParen = ModelCard.parentElement;
                ModelCardParen.style.display = "flex";
                Backdrop.style.display = "block";
                Backdrop.classList.add('__MODEL_BACKDROP_ANIM_ENTER');
                Backdrop.classList.remove('__MODEL_BACKDROP_ANIM_LEAVE');
                ModelCard.classList.add('__MODEL_ANIM_ENTER');
                ModelCard.classList.remove('__MODEL_ANIM_LEAVE');
                ModelClose = CurrentModel.querySelectorAll('model-close');
                isModelOpen = true;
            } else {
                console.warn(`${CurrentModel.id} : is not a model element`)
            }
        } else {
            console.warn(`${CurrentModel.id} : is not defined`)
        }

    });
});

var modelClose1 = document.querySelectorAll(".model-close");
// console.log(modelClose1);
modelClose1.forEach((m) => {
    m.addEventListener('click', e => {
        Backdrop.classList.add('__MODEL_BACKDROP_ANIM_LEAVE');
        Backdrop.classList.remove('__MODEL_BACKDROP_ANIM_ENTER');
        // ModelCard.classList.remove('__MODEL_ANIM_ENTER');
        ModelCard.classList.add('__MODEL_ANIM_LEAVE');
        setTimeout(() => {
            ModelCardParen.style.display = "none";
            Backdrop.style.display = "none";
        }, 300)
        // console.log("hello");
    });
});

function onLoadFunction() {
    document.querySelector('#loading').style.display = "none";
}

