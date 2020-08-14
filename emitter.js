export function Emitter() {
  const listeners = {} // listeners НЕДОСТУПНЫ ИЗ ВНЕ!!!
  
  return {
    // На ключ добавляем новый метод-функцию - emitter.listen('ключ', () => {})
    listen: (event, callback) => {
      listeners[event] = listeners[event] || []
      listeners[event].push(callback) // ДЛЯ КАЖДОГО ЭВЕНТА ДОБАВЛЯЕМ ФУНКЦИЮ
    },

    // // по ключу запускаем метод-функцию и передаем туда аргументы - emitter.emit('ключ', {a: 1})
    emit: (event, ...args) => {
      listeners[event].forEach(listener => { listener(...args) }) 
    }
  }
}


