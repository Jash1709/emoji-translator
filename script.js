// Comprehensive emoji mapping dictionary
const emojiMap = {
    // Emotions and feelings
    'happy': '😊', 'sad': '😢', 'angry': '😡', 'love': '❤️', 'excited': '🤩',
    'smile': '😊', 'laugh': '😂', 'cry': '😭', 'mad': '😡', 'joy': '😄',
    'heart': '❤️', 'kiss': '😘', 'hug': '🤗', 'cool': '😎', 'surprised': '😲',
    'shocked': '😱', 'confused': '😕', 'worried': '😟', 'sleepy': '😴', 'tired': '😴',
    'sick': '🤒', 'nervous': '😰', 'embarrassed': '😳', 'proud': '😤', 'relieved': '😌',

    // Animals
    'cat': '🐱', 'dog': '🐶', 'mouse': '🐭', 'hamster': '🐹', 'rabbit': '🐰',
    'fox': '🦊', 'bear': '🐻', 'panda': '🐼', 'koala': '🐨', 'tiger': '🐯',
    'lion': '🦁', 'cow': '🐄', 'pig': '🐷', 'frog': '🐸', 'monkey': '🐵',
    'chicken': '🐔', 'penguin': '🐧', 'bird': '🐦', 'duck': '🦆', 'eagle': '🦅',
    'owl': '🦉', 'bat': '🦇', 'wolf': '🐺', 'unicorn': '🦄', 'horse': '🐴',
    'zebra': '🦓', 'deer': '🦌', 'elephant': '🐘', 'rhinoceros': '🦏', 'hippopotamus': '🦛',
    'crocodile': '🐊', 'turtle': '🐢', 'lizard': '🦎', 'snake': '🐍', 'dragon': '🐉',
    'whale': '🐳', 'dolphin': '🐬', 'fish': '🐠', 'shark': '🦈', 'octopus': '🐙',
    'butterfly': '🦋', 'bee': '🐝', 'spider': '🕷️', 'scorpion': '🦂', 'crab': '🦀',

    // Food and drinks
    'pizza': '🍕', 'burger': '🍔', 'coffee': '☕', 'tea': '🍵', 'beer': '🍺',
    'wine': '🍷', 'cake': '🎂', 'ice cream': '🍦', 'cookie': '🍪', 'donut': '🍩',
    'bread': '🍞', 'cheese': '🧀', 'meat': '🥩', 'chicken': '🍗', 'bacon': '🥓',
    'egg': '🥚', 'milk': '🥛', 'honey': '🍯', 'salt': '🧂', 'pepper': '🧂',
    'apple': '🍎', 'banana': '🍌', 'orange': '🍊', 'lemon': '🍋', 'strawberry': '🍓',
    'grapes': '🍇', 'watermelon': '🍉', 'pineapple': '🍍', 'coconut': '🥥', 'peach': '🍑',
    'cherry': '🍒', 'avocado': '🥑', 'tomato': '🍅', 'potato': '🥔', 'carrot': '🥕',
    'corn': '🌽', 'pepper': '🌶️', 'cucumber': '🥒', 'lettuce': '🥬', 'broccoli': '🥦',
    'mushroom': '🍄', 'peanut': '🥜', 'rice': '🍚', 'pasta': '🍝', 'soup': '🍲',
    'salad': '🥗', 'sandwich': '🥪', 'taco': '🌮', 'burrito': '🌯', 'hot dog': '🌭',
    'fries': '🍟', 'popcorn': '🍿', 'chocolate': '🍫', 'candy': '🍬', 'lollipop': '🍭',

    // Weather and nature
    'sun': '☀️', 'moon': '🌙', 'star': '⭐', 'cloud': '☁️', 'rain': '🌧️',
    'snow': '❄️', 'thunder': '⛈️', 'lightning': '⚡', 'rainbow': '🌈', 'fire': '🔥',
    'water': '💧', 'ocean': '🌊', 'mountain': '⛰️', 'volcano': '🌋', 'desert': '🏜️',
    'beach': '🏖️', 'island': '🏝️', 'forest': '🌲', 'tree': '🌳', 'palm': '🌴',
    'cactus': '🌵', 'flower': '🌸', 'rose': '🌹', 'tulip': '🌷', 'sunflower': '🌻',
    'grass': '🌱', 'leaves': '🍃', 'wind': '💨', 'tornado': '🌪️', 'fog': '🌫️',
    'sunny': '☀️', 'cloudy': '☁️', 'rainy': '🌧️', 'snowy': '❄️', 'windy': '💨',
    'hot': '🔥', 'cold': '❄️', 'warm': '☀️', 'cool': '❄️', 'beautiful': '🌸',

    // Transportation
    'car': '🚗', 'bus': '🚌', 'train': '🚆', 'plane': '✈️', 'boat': '⛵',
    'bike': '🚲', 'motorcycle': '🏍️', 'truck': '🚛', 'taxi': '🚕', 'ambulance': '🚑',
    'police': '🚓', 'fire truck': '🚒', 'rocket': '🚀', 'helicopter': '🚁', 'ship': '🚢',
    'subway': '🚇', 'tram': '🚊', 'monorail': '🚝', 'scooter': '🛴', 'skateboard': '🛹',
    'travel': '✈️', 'trip': '🧳', 'vacation': '🏖️', 'journey': '🗺️', 'road': '🛣️',

    // Activities and sports
    'football': '⚽', 'basketball': '🏀', 'tennis': '🎾', 'baseball': '⚾', 'golf': '⛳',
    'swimming': '🏊', 'running': '🏃', 'cycling': '🚴', 'skiing': '⛷️', 'surfing': '🏄',
    'climbing': '🧗', 'boxing': '🥊', 'dancing': '💃', 'singing': '🎤', 'music': '🎵',
    'guitar': '🎸', 'piano': '🎹', 'violin': '🎻', 'drums': '🥁', 'party': '🎉',
    'birthday': '🎂', 'celebration': '🎊', 'gift': '🎁', 'balloon': '🎈', 'fireworks': '🎆',
    'game': '🎮', 'movie': '🎬', 'camera': '📷', 'art': '🎨', 'book': '📚',
    'writing': '✍️', 'reading': '📖', 'studying': '📝', 'working': '💻', 'cooking': '👨‍🍳',

    // Objects and technology
    'phone': '📱', 'computer': '💻', 'laptop': '💻', 'keyboard': '⌨️', 'mouse': '🖱️',
    'printer': '🖨️', 'camera': '📷', 'tv': '📺', 'radio': '📻', 'watch': '⌚',
    'clock': '🕐', 'alarm': '⏰', 'timer': '⏲️', 'battery': '🔋', 'light': '💡',
    'candle': '🕯️', 'flashlight': '🔦', 'key': '🔑', 'lock': '🔒', 'door': '🚪',
    'window': '🪟', 'mirror': '🪞', 'toilet': '🚽', 'shower': '🚿', 'bathtub': '🛁',
    'bed': '🛏️', 'chair': '🪑', 'table': '🪑', 'couch': '🛋️', 'umbrella': '☂️',
    'bag': '👜', 'backpack': '🎒', 'suitcase': '🧳', 'wallet': '👛', 'purse': '👛',
    'glasses': '👓', 'hat': '🎩', 'crown': '👑', 'ring': '💍', 'gem': '💎',

    // Time and calendar
    'time': '⏰', 'day': '📅', 'night': '🌙', 'morning': '🌅', 'evening': '🌆',
    'week': '📅', 'month': '📅', 'year': '📅', 'calendar': '📅', 'date': '📅',
    'today': '📅', 'tomorrow': '📅', 'yesterday': '📅', 'future': '🔮', 'past': '📜',
    'schedule': '📋', 'appointment': '📋', 'meeting': '📋', 'deadline': '⏰', 'urgent': '🚨',

    // Work and business
    'work': '💼', 'job': '💼', 'office': '🏢', 'business': '💼', 'money': '💰',
    'dollar': '💵', 'euro': '💶', 'pound': '💷', 'yen': '💴', 'credit card': '💳',
    'bank': '🏦', 'atm': '🏧', 'chart': '📊', 'graph': '📈', 'report': '📋',
    'email': '📧', 'message': '💬', 'call': '📞', 'meeting': '🤝', 'presentation': '📊',
    'project': '📋', 'task': '✅', 'goal': '🎯', 'success': '🏆', 'winner': '🥇',

    // Places and buildings
    'home': '🏠', 'house': '🏠', 'apartment': '🏢', 'school': '🏫', 'hospital': '🏥',
    'church': '⛪', 'mosque': '🕌', 'temple': '🛕', 'castle': '🏰', 'tower': '🗼',
    'bridge': '🌉', 'statue': '🗽', 'park': '🏞️', 'garden': '🏡', 'farm': '🚜',
    'zoo': '🦁', 'museum': '🏛️', 'library': '📚', 'store': '🏪', 'restaurant': '🍽️',
    'cafe': '☕', 'bar': '🍻', 'club': '🕺', 'gym': '🏋️', 'spa': '💆',
    'hotel': '🏨', 'motel': '🏨', 'resort': '🏖️', 'camping': '🏕️', 'tent': '⛺',

    // Common words and expressions
    'yes': '✅', 'no': '❌', 'ok': '👌', 'good': '👍', 'bad': '👎',
    'great': '👌', 'awesome': '🤩', 'amazing': '😍', 'perfect': '💯', 'excellent': '⭐',
    'wonderful': '✨', 'fantastic': '🎉', 'terrible': '😱', 'horrible': '😰', 'awful': '😵',
    'help': '🆘', 'please': '🙏', 'thanks': '🙏', 'sorry': '😔', 'excuse me': '🙏',
    'hello': '👋', 'hi': '👋', 'bye': '👋', 'goodbye': '👋', 'welcome': '🤗',
    'congratulations': '🎉', 'good luck': '🍀', 'best wishes': '💕', 'get well': '🙏',
    'miss you': '💔', 'thinking of you': '💭', 'dream': '💭', 'wish': '🌟',
    'hope': '🤞', 'faith': '🙏', 'believe': '💫', 'trust': '🤝', 'friendship': '👫',

    // Numbers (spelled out)
    'one': '1️⃣', 'two': '2️⃣', 'three': '3️⃣', 'four': '4️⃣', 'five': '5️⃣',
    'six': '6️⃣', 'seven': '7️⃣', 'eight': '8️⃣', 'nine': '9️⃣', 'ten': '🔟',
    'hundred': '💯', 'thousand': '💯', 'million': '💰', 'first': '🥇', 'second': '🥈',
    'third': '🥉', 'last': '🔚', 'new': '🆕', 'old': '👴', 'young': '👶',

    // Actions and verbs
    'eat': '🍽️', 'drink': '🥤', 'sleep': '😴', 'wake up': '😴', 'walk': '🚶',
    'run': '🏃', 'jump': '🦘', 'fly': '✈️', 'swim': '🏊', 'drive': '🚗',
    'ride': '🚲', 'sit': '🪑', 'stand': '🧍', 'lie': '🛏️', 'think': '💭',
    'speak': '🗣️', 'listen': '👂', 'see': '👀', 'look': '👀', 'watch': '👀',
    'hear': '👂', 'smell': '👃', 'taste': '👅', 'touch': '👋', 'feel': '💕',
    'learn': '📚', 'teach': '👨‍🏫', 'study': '📝', 'practice': '💪', 'exercise': '🏋️',
    'play': '🎮', 'dance': '💃', 'sing': '🎤', 'laugh': '😂', 'smile': '😊',
    'cry': '😭', 'shout': '📢', 'whisper': '🤫', 'hide': '🙈', 'find': '🔍',
    'lose': '😔', 'win': '🏆', 'fight': '👊', 'love': '❤️', 'hate': '💔',
    'like': '👍', 'dislike': '👎', 'want': '🙋', 'need': '🚨', 'give': '🤲',
    'take': '✊', 'buy': '🛒', 'sell': '💰', 'pay': '💳', 'cost': '💰',

    // Body parts
    'head': '🗣️', 'face': '😊', 'eye': '👁️', 'nose': '👃', 'mouth': '👄',
    'ear': '👂', 'hair': '💇', 'neck': '🧣', 'shoulder': '🤷', 'arm': '💪',
    'hand': '✋', 'finger': '👆', 'chest': '🫁', 'back': '🔙', 'stomach': '🤰',
    'leg': '🦵', 'foot': '🦶', 'toe': '🦶', 'skin': '🧴', 'bone': '🦴',
    'muscle': '💪', 'brain': '🧠', 'heart': '❤️', 'blood': '🩸', 'tooth': '🦷',

    // Directions and positions
    'up': '⬆️', 'down': '⬇️', 'left': '⬅️', 'right': '➡️', 'north': '⬆️',
    'south': '⬇️', 'east': '➡️', 'west': '⬅️', 'forward': '⏩', 'backward': '⏪',
    'top': '🔝', 'bottom': '⬇️', 'middle': '🎯', 'center': '🎯', 'corner': '📐',
    'inside': '📦', 'outside': '🌍', 'front': '👁️', 'behind': '👤', 'beside': '↔️',
    'above': '⬆️', 'below': '⬇️', 'near': '📍', 'far': '🔭', 'close': '🤏',

    // Colors
    'red': '🔴', 'blue': '🔵', 'green': '🟢', 'yellow': '🟡', 'orange': '🟠',
    'purple': '🟣', 'pink': '🌸', 'brown': '🤎', 'black': '⚫', 'white': '⚪',
    'gray': '🔘', 'grey': '🔘', 'gold': '🥇', 'silver': '🥈', 'rainbow': '🌈',

    // Symbols and punctuation
    'question': '❓', 'exclamation': '❗', 'warning': '⚠️', 'stop': '🛑', 'go': '🟢',
    'check': '✅', 'cross': '❌', 'plus': '➕', 'minus': '➖', 'multiply': '✖️',
    'divide': '➗', 'equals': '🟰', 'percent': '💯', 'dollar': '💲', 'copyright': '©️',
    'trademark': '™️', 'registered': '®️', 'infinity': '♾️', 'heart': '💖', 'broken heart': '💔'
};

// Additional patterns for better matching
const patterns = {
    // Greeting patterns
    'hello world': '👋🌍',
    'good morning': '🌅👋',
    'good night': '🌙😴',
    'good evening': '🌆👋',
    'good afternoon': '☀️👋',
    
    // Common phrases
    'happy birthday': '🎂🎉',
    'merry christmas': '🎄🎅',
    'happy new year': '🎊🎆',
    'thank you': '🙏❤️',
    'i love you': '❤️😘',
    'miss you': '💔😢',
    'good luck': '🍀✨',
    'congratulations': '🎉👏',
    'well done': '👏✨',
    'see you later': '👋😊',
    
    // Food combinations
    'pizza party': '🍕🎉',
    'coffee break': '☕⏰',
    'ice cream': '🍦',
    'hot dog': '🌭',
    'french fries': '🍟',
    
    // Weather combinations
    'sunny day': '☀️🌅',
    'rainy day': '🌧️☔',
    'snowy day': '❄️☃️',
    'beautiful weather': '☀️🌸',
    
    // Activity combinations
    'movie night': '🎬🍿',
    'date night': '💕🌹',
    'game time': '🎮⏰',
    'work out': '🏋️💪',
    'road trip': '🚗🛣️'
};

class EmojiTranslator {
    constructor() {
        this.textInput = document.getElementById('textInput');
        this.emojiOutput = document.getElementById('emojiOutput');
        this.translateBtn = document.getElementById('translateBtn');
        this.copyBtn = document.getElementById('copyBtn');
        this.exampleBtns = document.querySelectorAll('.example-btn');
        
        // NLP engine (compromise) availability
        this.hasNLP = typeof nlp !== 'undefined';
        
        // AI-like features
        this.sentimentWords = this.initSentimentAnalysis();
        this.contextPatterns = this.initContextPatterns();
        
        this.initEventListeners();
        this.setupRealTimeTranslation();
    }
    
    initSentimentAnalysis() {
        return {
            positive: {
                high: ['amazing', 'fantastic', 'incredible', 'awesome', 'wonderful', 'brilliant', 'perfect', 'outstanding', 'excellent', 'superb'],
                medium: ['good', 'nice', 'great', 'fine', 'pleasant', 'lovely', 'beautiful', 'cool', 'fun', 'happy'],
                low: ['okay', 'alright', 'decent', 'acceptable', 'fair']
            },
            negative: {
                high: ['terrible', 'awful', 'horrible', 'disgusting', 'hate', 'worst', 'disaster', 'nightmare'],
                medium: ['bad', 'sad', 'angry', 'upset', 'disappointed', 'annoyed', 'frustrated'],
                low: ['meh', 'boring', 'tired', 'confused', 'uncertain']
            },
            excited: ['wow', 'omg', 'yay', 'woohoo', 'yes', 'finally', 'cant wait', "can't wait"],
            love: ['love', 'adore', 'cherish', 'treasure', 'heart', 'crush', 'romantic', 'valentine']
        };
    }
    
    initContextPatterns() {
        return {
            time: {
                morning: ['morning', 'dawn', 'sunrise', 'breakfast', 'wake up'],
                afternoon: ['afternoon', 'lunch', 'noon', 'midday'],
                evening: ['evening', 'dinner', 'sunset', 'dusk'],
                night: ['night', 'midnight', 'sleep', 'bed', 'dream']
            },
            weather: {
                patterns: ['today is', 'weather is', 'outside is', 'so hot', 'so cold', 'raining', 'snowing']
            },
            social: {
                celebration: ['birthday', 'anniversary', 'graduation', 'promotion', 'wedding', 'party'],
                greeting: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
                farewell: ['bye', 'goodbye', 'see you', 'take care', 'farewell']
            },
            activities: {
                food: ['eating', 'cooking', 'hungry', 'delicious', 'tasty', 'meal', 'restaurant'],
                work: ['working', 'meeting', 'project', 'deadline', 'office', 'boss', 'colleague'],
                travel: ['vacation', 'trip', 'flight', 'hotel', 'beach', 'mountain', 'city']
            }
        };
    }
    
    initEventListeners() {
        // Translate button
        this.translateBtn.addEventListener('click', () => {
            this.translateText();
        });
        
        // Copy button
        this.copyBtn.addEventListener('click', () => {
            this.copyToClipboard();
        });
        
        // Example buttons
        this.exampleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const text = e.target.getAttribute('data-text');
                this.textInput.value = text;
                this.translateText();
                this.textInput.focus();
            });
        });
        
        // Enter key support
        this.textInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.translateText();
            }
        });
    }
    
    setupRealTimeTranslation() {
        let timeout;
        this.textInput.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (this.textInput.value.trim()) {
                    this.translateText();
                } else {
                    this.resetOutput();
                }
            }, 500); // Debounce for 500ms
        });
    }
    
    async translateText() {
        const text = this.textInput.value.trim();
        if (!text) return this.resetOutput();

        this.translateBtn.classList.add('loading');
        this.translateBtn.textContent = '🔄 Translating...';

        // Local-only translation (no API)
        const output = this.convertToEmojis(text);
        this.displayResult(output);

        this.translateBtn.classList.remove('loading');
        this.translateBtn.textContent = '✨ Translate to Emojis';
        this.emojiOutput.classList.add('bounce');
        setTimeout(() => this.emojiOutput.classList.remove('bounce'), 600);
    }
    
    convertToEmojis(text) {
        const originalText = text.trim();
        
        if (!originalText) return '🤔 Hmm, try different words!';
        
        // Advanced NLP Analysis
        const nlpAnalysis = this.performNLPAnalysis(originalText);
        
        // Convert to pure emojis based on understanding
        const emojiResult = this.generateEmojiFromNLP(nlpAnalysis);
        
        return emojiResult;
    }
    
    performNLPAnalysis(text) {
        if (this.hasNLP) {
            const doc = nlp(text);
            const sentences = doc.sentences().out('array');
            const terms = doc.terms().json();
            const tokens = terms.map(t => ({
                word: (t.normal || t.text || '').toLowerCase(),
                pos: (t.tags && t.tags[0]) || 'Noun',
                lemma: (t.lemma || t.normal || t.text || '').toLowerCase(),
            }));
            const nounPhrases = doc.nouns().json();
            const verbs = doc.verbs().json();
            const entitiesDoc = doc.topics();
            const people = doc.people().out('array');
            const places = doc.places().out('array');
            const dates = doc.dates().out('array');
            const negations = doc.match('#Negative+').out('array');

            const analysis = {
                originalText: text,
                sentences,
                tokens: tokens.map(t => ({
                    word: t.word,
                    pos: this.mapCompromisePOSToSimple(t.pos),
                    lemma: t.lemma,
                    semantic: this.getSemanticCategory(t.lemma || t.word),
                    emoji: this.getWordEmoji(t.lemma || t.word)
                })),
                entities: [
                    ...people.map(p => ({ type: 'person', value: p, emoji: '👤' })),
                    ...places.map(p => ({ type: 'place', value: p, emoji: '📍' })),
                    ...dates.map(d => ({ type: 'time', value: d, emoji: '📅' })),
                ],
                nounPhrases,
                verbs,
                negations,
                sentenceStructure: this.analyzeSentenceStructureWithNLP(tokens, verbs, nounPhrases),
                semantics: this.extractSemantics(text),
                sentiment: this.analyzeSentiment(text),
                context: this.analyzeContext(text),
                intensity: this.analyzeIntensity(text)
            };
            return analysis;
        }

        // Fallback to heuristic analysis
        const analysis = {
            originalText: text,
            sentences: this.splitIntoSentences(text),
            tokens: this.tokenize(text),
            entities: this.extractEntities(text),
            sentenceStructure: this.analyzeSentenceStructure(text),
            semantics: this.extractSemantics(text),
            sentiment: this.analyzeSentiment(text),
            context: this.analyzeContext(text),
            intensity: this.analyzeIntensity(text)
        };
        return analysis;
    }

    mapCompromisePOSToSimple(tag) {
        if (!tag) return 'noun';
        const t = String(tag).toLowerCase();
        if (t.includes('verb')) return 'verb';
        if (t.includes('adj')) return 'adjective';
        if (t.includes('adv')) return 'adverb';
        if (t.includes('pron')) return 'pronoun';
        if (t.includes('prep')) return 'preposition';
        if (t.includes('conj')) return 'conjunction';
        if (t.includes('determiner') || t.includes('article')) return 'article';
        return 'noun';
    }

    analyzeSentenceStructureWithNLP(tokens, verbs, nounPhrases) {
        const structure = { subject: null, verb: null, object: null, sentenceType: 'statement' };
        const firstVerb = (verbs[0] && (verbs[0].normal || verbs[0].text || '').toLowerCase()) || null;
        const firstNP = (nounPhrases[0] && (nounPhrases[0].normal || nounPhrases[0].text || '').toLowerCase()) || null;
        const secondNP = (nounPhrases[1] && (nounPhrases[1].normal || nounPhrases[1].text || '').toLowerCase()) || null;

        if (firstNP) structure.subject = { word: firstNP, semantic: this.getSemanticCategory(firstNP), emoji: this.getWordEmoji(firstNP) };
        if (firstVerb) structure.verb = { word: firstVerb, semantic: 'action', emoji: this.getWordEmoji(firstVerb) };
        if (secondNP) structure.object = { word: secondNP, semantic: this.getSemanticCategory(secondNP), emoji: this.getWordEmoji(secondNP) };

        return structure;
    }
    
    splitIntoSentences(text) {
        return text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    }
    
    tokenize(text) {
        // Advanced tokenization with POS tagging simulation
        const words = text.toLowerCase().match(/\b\w+\b/g) || [];
        return words.map(word => ({
            word: word,
            pos: this.getPOSTag(word),
            semantic: this.getSemanticCategory(word),
            emoji: this.getWordEmoji(word)
        }));
    }
    
    getPOSTag(word) {
        const posPatterns = {
            pronoun: ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'],
            verb: ['am', 'is', 'are', 'was', 'were', 'have', 'has', 'had', 'will', 'would', 'can', 'could', 'should', 'go', 'goes', 'went', 'eat', 'eats', 'ate', 'love', 'loves', 'loved', 'like', 'likes', 'liked', 'want', 'wants', 'wanted', 'need', 'needs', 'needed', 'see', 'sees', 'saw', 'think', 'thinks', 'thought', 'feel', 'feels', 'felt'],
            article: ['a', 'an', 'the'],
            preposition: ['in', 'on', 'at', 'by', 'for', 'with', 'to', 'from', 'of', 'about', 'under', 'over'],
            conjunction: ['and', 'or', 'but', 'so', 'because', 'if', 'when', 'while'],
            adjective: ['good', 'bad', 'big', 'small', 'happy', 'sad', 'beautiful', 'ugly', 'hot', 'cold', 'new', 'old', 'young', 'fast', 'slow', 'amazing', 'terrible', 'wonderful', 'awful'],
            adverb: ['very', 'really', 'quite', 'extremely', 'incredibly', 'absolutely', 'totally', 'completely', 'definitely', 'probably', 'maybe']
        };
        
        for (const [pos, words] of Object.entries(posPatterns)) {
            if (words.includes(word)) return pos;
        }
        
        // Default heuristics
        if (word.endsWith('ly')) return 'adverb';
        if (word.endsWith('ing')) return 'verb';
        if (word.endsWith('ed')) return 'verb';
        if (word.endsWith('s') && word.length > 3) return 'noun_plural';
        
        return 'noun'; // Default
    }
    
    normalizeWord(word) {
        if (!word) return '';
        let w = String(word).toLowerCase();
        if (this.hasNLP) {
            const d = nlp(w);
            const verbBase = d.verbs().toInfinitive().out('text');
            if (verbBase) w = verbBase.toLowerCase();
            const nounBase = nlp(w).nouns().toSingular().out('text');
            if (nounBase) w = nounBase.toLowerCase();
        } else {
            if (/\w+ies$/.test(w)) w = w.replace(/ies$/, 'y');
            else if (/\w+ves$/.test(w)) w = w.replace(/ves$/, 'f');
            else if (/\w+es$/.test(w)) w = w.replace(/es$/, '');
            else if (/\w+s$/.test(w) && w.length > 3) w = w.replace(/s$/, '');
        }
        return w;
    }

    getSemanticCategory(word) {
        const base = this.normalizeWord(word);
        const semanticCategories = {
            person: ['person', 'people', 'man', 'woman', 'boy', 'girl', 'child', 'baby', 'friend', 'family', 'mother', 'father', 'brother', 'sister'],
            animal: ['cat', 'dog', 'bird', 'fish', 'lion', 'tiger', 'bear', 'elephant', 'monkey', 'horse', 'cow', 'pig', 'chicken', 'duck', 'rabbit', 'mouse', 'frog', 'snake', 'butterfly', 'bee'],
            food: ['pizza', 'burger', 'coffee', 'tea', 'cake', 'apple', 'banana', 'bread', 'cheese', 'milk', 'water', 'wine', 'beer'],
            place: ['home', 'house', 'school', 'work', 'office', 'restaurant', 'store', 'park', 'beach', 'mountain', 'city', 'country'],
            transport: ['car', 'bus', 'train', 'plane', 'bike', 'boat', 'ship', 'taxi'],
            emotion: ['happy', 'sad', 'angry', 'excited', 'nervous', 'confused', 'surprised', 'love', 'hate', 'fear'],
            action: ['go', 'come', 'eat', 'drink', 'sleep', 'work', 'play', 'study', 'read', 'write', 'run', 'walk', 'drive', 'fly'],
            time: ['morning', 'afternoon', 'evening', 'night', 'today', 'tomorrow', 'yesterday', 'week', 'month', 'year'],
            weather: ['sun', 'rain', 'snow', 'wind', 'storm', 'hot', 'cold', 'warm', 'cool']
        };
        
        for (const [category, words] of Object.entries(semanticCategories)) {
            if (words.includes(base)) return category;
        }
        
        return 'other';
    }
    
    getWordEmoji(word) {
        const base = this.normalizeWord(word);
        return emojiMap[base] || emojiMap[word] || null;
    }
    
    extractEntities(text) {
        const entities = [];
        const lowerText = text.toLowerCase();
        
        // Named entity recognition patterns
        const entityPatterns = {
            person: /\b(mom|dad|mother|father|friend|boss|teacher|doctor)\b/g,
            place: /\b(home|work|school|restaurant|park|beach|city|country)\b/g,
            time: /\b(morning|afternoon|evening|night|today|tomorrow|yesterday)\b/g,
            event: /\b(birthday|party|meeting|wedding|graduation|vacation)\b/g
        };
        
        for (const [entityType, pattern] of Object.entries(entityPatterns)) {
            const matches = lowerText.match(pattern);
            if (matches) {
                matches.forEach(match => {
                    entities.push({
                        type: entityType,
                        value: match,
                        emoji: this.getEntityEmoji(entityType, match)
                    });
                });
            }
        }
        
        return entities;
    }
    
    getEntityEmoji(entityType, value) {
        const entityEmojis = {
            person: {'mom': '👩', 'dad': '👨', 'mother': '👩', 'father': '👨', 'friend': '👫', 'boss': '👔', 'teacher': '👨‍🏫', 'doctor': '👨‍⚕️'},
            place: {'home': '🏠', 'work': '💼', 'school': '🏫', 'restaurant': '🍽️', 'park': '🏞️', 'beach': '🏖️', 'city': '🏙️', 'country': '🌍'},
            time: {'morning': '🌅', 'afternoon': '☀️', 'evening': '🌆', 'night': '🌙', 'today': '📅', 'tomorrow': '📅', 'yesterday': '📅'},
            event: {'birthday': '🎂', 'party': '🎉', 'meeting': '👥', 'wedding': '👰', 'graduation': '🎓', 'vacation': '🏖️'}
        };
        
        return entityEmojis[entityType]?.[value] || '✨';
    }
    
    analyzeSentenceStructure(text) {
        const structure = {
            subject: null,
            verb: null,
            object: null,
            sentenceType: 'statement'
        };
        
        const tokens = this.tokenize(text);
        
        // Simple sentence structure detection
        const pronouns = tokens.filter(t => t.pos === 'pronoun');
        const verbs = tokens.filter(t => t.pos === 'verb');
        const nouns = tokens.filter(t => t.pos === 'noun' || t.pos === 'noun_plural');
        
        if (pronouns.length > 0) structure.subject = pronouns[0];
        else if (nouns.length > 0) structure.subject = nouns[0];
        
        if (verbs.length > 0) structure.verb = verbs[0];
        
        if (nouns.length > 1) structure.object = nouns[nouns.length - 1];
        
        // Sentence type detection
        if (text.includes('?')) structure.sentenceType = 'question';
        else if (text.includes('!')) structure.sentenceType = 'exclamation';
        else if (verbs.some(v => ['go', 'come', 'stop', 'wait'].includes(v.word))) structure.sentenceType = 'command';
        
        return structure;
    }
    
    extractSemantics(text) {
        const semantics = {
            mainAction: null,
            mainEmotion: null,
            mainObject: null,
            relationships: [],
            narrative: this.extractNarrative(text)
        };
        
        const tokens = this.tokenize(text);
        
        // Find main action
        const actionWords = tokens.filter(t => t.semantic === 'action');
        if (actionWords.length > 0) semantics.mainAction = actionWords[0];
        
        // Find main emotion
        const emotionWords = tokens.filter(t => t.semantic === 'emotion');
        if (emotionWords.length > 0) semantics.mainEmotion = emotionWords[0];
        
        // Find main object
        const objectWords = tokens.filter(t => ['animal', 'food', 'place', 'person'].includes(t.semantic));
        if (objectWords.length > 0) semantics.mainObject = objectWords[0];
        
        return semantics;
    }
    
    extractNarrative(text) {
        const lowerText = text.toLowerCase();
        
        // Common narrative patterns
        const narrativePatterns = {
            desire: /\b(want|need|wish|hope|dream)\b.*\b(to|for)\b/,
            possession: /\b(have|has|got|own)\b/,
            movement: /\b(go|going|went|come|coming|came|travel|trip)\b/,
            state: /\b(am|is|are|feel|feeling|seem)\b/,
            action: /\b(eat|eating|drink|drinking|work|working|play|playing)\b/,
            social: /\b(meet|meeting|talk|talking|see|seeing|visit|visiting)\b/
        };
        
        for (const [pattern, regex] of Object.entries(narrativePatterns)) {
            if (regex.test(lowerText)) {
                return pattern;
            }
        }
        
        return 'general';
    }
    
    generateEmojiFromNLP(analysis) {
        let emojiSequence = [];
        
        // Start with context-based emoji
        emojiSequence.push(...this.generateContextualEmojis(analysis));
        
        // Add main narrative emojis
        emojiSequence.push(...this.generateNarrativeEmojis(analysis));
        
        // Add entity-based emojis
        emojiSequence.push(...this.generateEntityEmojis(analysis));
        
        // Add emotional context
        emojiSequence.push(...this.generateEmotionalEmojis(analysis));
        
        // Deduplicate and order emojis with a simple grammar: [time][place][subject][action][object][modifiers][emotion]
        const order = (e) => {
            if ('📅🌅☀️🌆🌙'.includes(e)) return 1; // time
            if ('🏠🏫🏢🏖️🏞️🏙️📍'.includes(e)) return 2; // place
            if ('👤👥🧑👩👨'.includes(e)) return 3; // subject
            if ('🚶➡️⚡💪🛑'.includes(e)) return 4; // action
            if ('🍕🍽️🍔🐱🐶📚💼'.includes(e)) return 5; // object
            if ('✨🎊🎉⭐🚀'.includes(e)) return 6; // modifiers
            return 7; // emotion and others
        };
        emojiSequence = Array.from(new Set(emojiSequence)).sort((a,b) => order(a) - order(b));
        
        // Clean and format
        let result = emojiSequence.filter(e => e).join(' ');
        
        // Ensure minimum meaningful output
        if (result.trim().length === 0) {
            result = this.fallbackTranslation(analysis.originalText);
        }
        
        return result;
    }
    
    generateContextualEmojis(analysis) {
        const emojis = [];
        
        // Time-based context
        const timeEntities = analysis.entities.filter(e => e.type === 'time');
        timeEntities.forEach(entity => emojis.push(entity.emoji));
        
        // Place-based context
        const placeEntities = analysis.entities.filter(e => e.type === 'place');
        placeEntities.forEach(entity => emojis.push(entity.emoji));
        
        return emojis;
    }
    
    generateNarrativeEmojis(analysis) {
        const emojis = [];
        const narrative = analysis.semantics.narrative;

        // Negation awareness: if negated, suppress or flip positive emojis
        const isNegated = (analysis.negations && analysis.negations.length > 0) || /\b(not|no|never|dont|don't|isn't|arent|aren't|cant|can't)\b/i.test(analysis.originalText);
        
        const narrativeEmojis = {
            desire: isNegated ? ['🙅‍♂️'] : ['🙏', '✨'],
            possession: isNegated ? ['🙅‍♂️'] : ['✋', '💎'],
            movement: isNegated ? ['🛑'] : ['🚶', '➡️'],
            state: isNegated ? ['🤔'] : ['🧍', '💭'],
            action: isNegated ? ['🛑'] : ['⚡', '💪'],
            social: isNegated ? ['🙅‍♂️'] : ['👥', '💬']
        };
        
        if (narrativeEmojis[narrative]) {
            emojis.push(...narrativeEmojis[narrative]);
        }
        
        // Add subject emoji
        if (analysis.sentenceStructure.subject?.emoji) {
            emojis.push(analysis.sentenceStructure.subject.emoji);
        } else if (analysis.sentenceStructure.subject?.semantic === 'person') {
            emojis.push('👤');
        }
        
        // Add verb/action emoji
        if (analysis.sentenceStructure.verb?.emoji) {
            emojis.push(analysis.sentenceStructure.verb.emoji);
        } else if (analysis.semantics.mainAction?.emoji) {
            emojis.push(analysis.semantics.mainAction.emoji);
        }
        
        // Add object emoji
        if (analysis.sentenceStructure.object?.emoji) {
            emojis.push(analysis.sentenceStructure.object.emoji);
        } else if (analysis.semantics.mainObject?.emoji) {
            emojis.push(analysis.semantics.mainObject.emoji);
        }
        
        return emojis;
    }
    
    generateEntityEmojis(analysis) {
        const emojis = [];
        
        // Add all detected entity emojis
        analysis.entities.forEach(entity => {
            if (entity.emoji) emojis.push(entity.emoji);
        });
        
        // Add semantic category emojis for important tokens
        analysis.tokens.forEach(token => {
            if (token.emoji && ['animal', 'food', 'emotion'].includes(token.semantic)) {
                emojis.push(token.emoji);
            }
        });
        
        return emojis;
    }
    
    generateEmotionalEmojis(analysis) {
        const emojis = [];
        
        // Add main emotion
        if (analysis.semantics.mainEmotion?.emoji) {
            emojis.push(analysis.semantics.mainEmotion.emoji);
        }
        
        // Add sentiment-based emojis
        if (analysis.sentiment.type === 'positive') {
            if (analysis.intensity > 2) {
                emojis.push('🎉', '✨');
            } else {
                emojis.push('😊');
            }
        } else if (analysis.sentiment.type === 'negative') {
            if (analysis.intensity > 2) {
                emojis.push('😡', '💔');
            } else {
                emojis.push('😔');
            }
        }
        
        // Add excitement indicators
        if (analysis.sentiment.excited) {
            emojis.push('🚀', '⭐');
        }
        
        // Add love indicators
        if (analysis.sentiment.love) {
            emojis.push('❤️', '💕');
        }
        
        return emojis;
    }
    
    fallbackTranslation(text) {
        // If NLP fails, do basic word-by-word emoji mapping
        const words = text.toLowerCase().match(/\b\w+\b/g) || [];
        const emojis = words.map(word => emojiMap[word]).filter(emoji => emoji);
        
        if (emojis.length > 0) {
            return emojis.join(' ');
        }
        
        return '🤔 💭 ❓';
    }
    
    analyzeSentiment(text) {
        const lowerText = text.toLowerCase();
        let sentiment = { type: 'neutral', intensity: 'medium', score: 0 };
        
        // Check for positive sentiment
        for (const [intensity, words] of Object.entries(this.sentimentWords.positive)) {
            for (const word of words) {
                if (lowerText.includes(word)) {
                    sentiment.type = 'positive';
                    sentiment.intensity = intensity;
                    sentiment.score += intensity === 'high' ? 3 : intensity === 'medium' ? 2 : 1;
                }
            }
        }
        
        // Check for negative sentiment
        for (const [intensity, words] of Object.entries(this.sentimentWords.negative)) {
            for (const word of words) {
                if (lowerText.includes(word)) {
                    sentiment.type = 'negative';
                    sentiment.intensity = intensity;
                    sentiment.score -= intensity === 'high' ? 3 : intensity === 'medium' ? 2 : 1;
                }
            }
        }
        
        // Check for excitement
        for (const word of this.sentimentWords.excited) {
            if (lowerText.includes(word)) {
                sentiment.excited = true;
                sentiment.score += 2;
            }
        }
        
        // Check for love
        for (const word of this.sentimentWords.love) {
            if (lowerText.includes(word)) {
                sentiment.love = true;
                sentiment.score += 2;
            }
        }
        
        return sentiment;
    }
    
    analyzeContext(text) {
        const lowerText = text.toLowerCase();
        let context = [];
        
        // Time context
        for (const [timeOfDay, words] of Object.entries(this.contextPatterns.time)) {
            for (const word of words) {
                if (lowerText.includes(word)) {
                    context.push({ type: 'time', value: timeOfDay });
                }
            }
        }
        
        // Social context
        for (const [socialType, words] of Object.entries(this.contextPatterns.social)) {
            for (const word of words) {
                if (lowerText.includes(word)) {
                    context.push({ type: 'social', value: socialType });
                }
            }
        }
        
        // Activity context
        for (const [activityType, words] of Object.entries(this.contextPatterns.activities)) {
            for (const word of words) {
                if (lowerText.includes(word)) {
                    context.push({ type: 'activity', value: activityType });
                }
            }
        }
        
        return context;
    }
    
    analyzeIntensity(text) {
        let intensity = 1;
        
        // Exclamation marks increase intensity
        const exclamationCount = (text.match(/!/g) || []).length;
        intensity += exclamationCount * 0.5;
        
        // Capital letters suggest intensity
        const capitalRatio = (text.match(/[A-Z]/g) || []).length / text.length;
        if (capitalRatio > 0.3) intensity += 1;
        
        // Multiple repeated letters suggest excitement
        if (/(.)\1{2,}/.test(text)) intensity += 0.5;
        
        return Math.min(intensity, 3); // Cap at 3
    }
    
    applyAITranslation(text, sentiment, context, intensity) {
        let result = text;
        
        // Smart context replacements
        context.forEach(ctx => {
            switch (ctx.type) {
                case 'time':
                    if (ctx.value === 'morning') {
                        result = result.replace(/\bgood\b/g, '🌅 good');
                    } else if (ctx.value === 'night') {
                        result = result.replace(/\bgood\b/g, '🌙 good');
                    }
                    break;
                    
                case 'social':
                    if (ctx.value === 'celebration') {
                        result = result.replace(/\bhappy\b/g, '🎉 happy');
                        result = result.replace(/\bgreat\b/g, '🎊 great');
                    }
                    break;
            }
        });
        
        // Handle questions intelligently
        if (text.includes('?')) {
            result = result.replace(/\?/g, ' ❓');
        }
        
        // Handle exclamations
        if (text.includes('!')) {
            if (sentiment.type === 'positive') {
                result = result.replace(/!/g, ' 🎉');
            } else if (sentiment.type === 'negative') {
                result = result.replace(/!/g, ' 😤');
            } else {
                result = result.replace(/!/g, ' ❗');
            }
        }
        
        return result;
    }
    
    enhanceWithSentiment(text, sentiment, intensity) {
        let result = text;
        
        // Add sentiment-based emojis at the end
        if (sentiment.type === 'positive') {
            if (sentiment.intensity === 'high') {
                result += intensity > 2 ? ' 🤩✨🎊' : ' 😍✨';
            } else if (sentiment.intensity === 'medium') {
                result += intensity > 2 ? ' 😊🎉' : ' 😊';
            }
        } else if (sentiment.type === 'negative') {
            if (sentiment.intensity === 'high') {
                result += intensity > 2 ? ' 😡💔😤' : ' 😢💔';
            } else if (sentiment.intensity === 'medium') {
                result += intensity > 2 ? ' 😔😤' : ' 😔';
            }
        }
        
        // Add special emojis for love and excitement
        if (sentiment.love) {
            result += ' 💕❤️';
        }
        
        if (sentiment.excited) {
            result += ' 🚀⭐';
        }
        
        return result;
    }
    
    displayResult(emojis) {
        this.emojiOutput.textContent = emojis;
        this.emojiOutput.classList.add('has-content');
        this.copyBtn.style.display = 'inline-block';
    }
    
    resetOutput() {
        this.emojiOutput.textContent = 'Your emojis will appear here! 🎉';
        this.emojiOutput.classList.remove('has-content');
        this.copyBtn.style.display = 'none';
    }
    
    async copyToClipboard() {
        try {
            const text = this.emojiOutput.textContent;
            await navigator.clipboard.writeText(text);
            
            // Visual feedback
            const originalText = this.copyBtn.textContent;
            this.copyBtn.textContent = '✅ Copied!';
            this.copyBtn.classList.add('copied');
            
            setTimeout(() => {
                this.copyBtn.textContent = originalText;
                this.copyBtn.classList.remove('copied');
            }, 2000);
            
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = this.emojiOutput.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            this.copyBtn.textContent = '✅ Copied!';
            setTimeout(() => {
                this.copyBtn.textContent = '📋 Copy Emojis';
            }, 2000);
        }
    }
}

// Initialize the translator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new EmojiTranslator();
    
    // Add some fun loading animation
    const header = document.querySelector('header h1');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        header.style.transition = 'all 0.8s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
}); 