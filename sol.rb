def ag(s)
  resultado = []
  
  # Vamos desde el último índice (longitud - 1) hacia abajo hasta el 0
  (s.length - 1).downto(0) do |i|
    resultado << s[i] # El operador '<<' es el equivalente a .push() o .append()
  end
  
  return resultado.join("") # Une el arreglo en un solo string
end

texto = "hello world"
puts ag(texto) # Imprime: dlrow olleh
