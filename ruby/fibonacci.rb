def fibonacci(num)
  fib_arr = [0, 1]
  if num >=2 
    for i in 2..num 
      new_num = fib_arr[i-1] + fib_arr[i-2]
      fib_arr << new_num
    end
  end
  return fib_arr[num]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
